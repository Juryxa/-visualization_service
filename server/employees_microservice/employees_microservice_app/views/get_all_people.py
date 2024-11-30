from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import Employees, Roles, Positions, Subdivisionteams, Subdivisiondetails, Subdivisions, Functionalblocks, Additionaloffices
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

@swagger_auto_schema(
    method="get",
    operation_summary="Получение доступных значений фильтров",
    operation_description="Возвращает списки доступных значений для фильтрации сотрудников. Поддерживает города, роли, должности, уровни подразделений и функциональные блоки.",
    responses={
        200: openapi.Response(
            description="Успешный ответ с доступными фильтрами",
            examples={
                "application/json": {
                    "cities": ["Москва", "Санкт-Петербург", "Новосибирск"],
                    "roles": ["Администратор", "Менеджер", "Разработчик"],
                    "positions": ["Тестировщик", "Бэкенд-разработчик", "Дизайнер"],
                    "subdivisions_1": ["Центральный офис", "Филиал в Оренбурге"],
                    "functional_blocks": ["Розничный блок", "Корпоративный блок"],
                    "subdivisions_2": ["Управление транзакционными продуктами"],
                    "subdivisions_3": ["Команда 1", "Команда 2"],
                    "subdivisions_4": ["Дополнительный офис 1", "Дополнительный офис 2"],
                }
            },
        ),
        500: openapi.Response(
            description="Ошибка на стороне сервера",
        ),
    },
)

@api_view(["GET"])
def get_filter_options(request):
    """
    Эндпоинт для получения доступных значений фильтров, включая все уровни подразделений из базы данных.
    """
    # Данные для фильтров из базы
    cities = Employees.objects.values_list("city", flat=True).distinct()
    cities = [city.strip() for city in cities if city]

    roles = Roles.objects.values_list("name", flat=True).distinct()
    roles = [role.strip() for role in roles if role]

    positions = Positions.objects.values_list("name", flat=True).distinct()
    positions = [position.strip() for position in positions if position]

    subdivisions_1 = Subdivisions.objects.values_list("name", flat=True).distinct()
    subdivisions_1 = [sub.strip() for sub in subdivisions_1 if sub]

    functional_blocks = Functionalblocks.objects.values_list("name", flat=True).distinct()
    functional_blocks = [block.strip() for block in functional_blocks if block]

    subdivisions_2 = Subdivisiondetails.objects.values_list("name", flat=True).distinct()
    subdivisions_2 = [sub.strip() for sub in subdivisions_2 if sub]

    subdivisions_3 = Subdivisionteams.objects.values_list("name", flat=True).distinct()
    subdivisions_3 = [sub.strip() for sub in subdivisions_3 if sub]

    subdivisions_4 = Additionaloffices.objects.values_list("name", flat=True).distinct()
    subdivisions_4 = [sub.strip() for sub in subdivisions_4 if sub]


    return Response({
        "cities": cities,
        "roles": roles,
        "positions": positions,
        "subdivisions_1": subdivisions_1,
        "functional_blocks": functional_blocks,
        "subdivisions_2": subdivisions_2,
        "subdivisions_3": subdivisions_3,
        "subdivisions_4": subdivisions_4,
    }, status=200)
