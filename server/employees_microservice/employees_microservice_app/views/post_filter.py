from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models import Employees
from ..serializers import EmployeeSerializer
import logging
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

logger = logging.getLogger(__name__)

@swagger_auto_schema(
    method="post",
    operation_summary="Фильтрация сотрудников",
    operation_description=(
        "Эндпоинт позволяет фильтровать сотрудников по различным параметрам, "
        "включая уровень подразделений (1-4), функциональный блок, должность, роль, "
        "личные данные (ФИО, телефон, город, адрес) и дополнительный офис."
    ),
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            "subdivision_1": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Название 1-го уровня подразделения (например, 'Центральный офис')",
                example="Центральный офис"
            ),
            "subdivision_2": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Название 2-го уровня подразделения (например, 'транзакционные продукты')",
                example="транзакционные продукты"
            ),
            "subdivision_3": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Название 3-го уровня подразделения (например, 'команда 2')",
                example="команда 2"
            ),
            "subdivision_4": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Название 4-го уровня подразделения (дополнительный офис)",
                example="Дополнительный офис 1"
            ),
            "functional_block": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Название функционального блока (например, 'Розничный блок')",
                example="Розничный блок"
            ),
            "position": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Название должности сотрудника",
                example="Тестировщик"
            ),
            "role": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Роль сотрудника",
                example="Администратор"
            ),
            "surname": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Фамилия сотрудника",
                example="Иванов"
            ),
            "name": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Имя сотрудника",
                example="Иван"
            ),
            "phone": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Телефон сотрудника",
                example="1234567890"
            ),
            "city": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Город сотрудника",
                example="Москва"
            ),
            "address": openapi.Schema(
                type=openapi.TYPE_STRING,
                description="Адрес сотрудника",
                example="ул. Пушкина, дом Колотушкина"
            ),
        },
        required=[],
    ),
    responses={
        200: openapi.Response(
            description="Успешная фильтрация сотрудников",
            examples={
                "application/json": [
                    {
                        "id": 1,
                        "surname": "Иванов",
                        "name": "Иван",
                        "phone": "1234567890",
                        "city": "Москва",
                        "address": "ул. Пушкина, дом Колотушкина",
                        "position": "Тестировщик",
                        "role": "Администратор",
                        "subdivision_1": "Центральный офис",
                        "subdivision_2": "транзакционные продукты",
                        "subdivision_3": "команда 2",
                        "subdivision_4": "Дополнительный офис 1",
                        "functional_block": "Розничный блок"
                    }
                ]
            },
        ),
        404: openapi.Response(
            description="Данные по указанным критериям не найдены",
            examples={
                "application/json": {"error": "По указанным критериям данных не найдено"}
            },
        ),
        500: openapi.Response(
            description="Ошибка на стороне сервера",
            examples={
                "application/json": {"error": "Ошибка при фильтрации данных"}
            },
        ),
    },
)

@api_view(["POST"])
def filter_employees(request):
    """
    Эндпоинт для фильтрации сотрудников с учетом всех параметров, включая дополнительный офис (подразделение 4).
    """
    # Получаем параметры из запроса
    filters = {
        "subdivision_1": request.data.get("subdivision_1"),
        "subdivision_2": request.data.get("subdivision_2"),
        "subdivision_3": request.data.get("subdivision_3"),
        "subdivision_4": request.data.get("subdivision_4"),
        "functional_block": request.data.get("functional_block"),
        "position": request.data.get("position"),
        "role": request.data.get("role"),
        "surname": request.data.get("surname"),
        "name": request.data.get("name"),
        "phone": request.data.get("phone"),
        "city": request.data.get("city"),
        "address": request.data.get("address"),
    }

    # Логируем полученные параметры фильтрации
    logger.info(f"Полученные параметры фильтрации: {filters}")

    # Базовый QuerySet
    queryset = Employees.objects.select_related(
        "position", "role",
        "subdivision_team__subdivision_detail__subdivision__functional_block",
        "additional_office"  # Указываем связь с офисами
    ).all()

    # Применяем фильтры только если значения указаны
    try:
        if filters["subdivision_1"]:
            queryset = queryset.filter(
                subdivision_team__subdivision_detail__subdivision__name__iexact=filters["subdivision_1"].strip()
            )
        if filters["subdivision_2"]:
            queryset = queryset.filter(
                subdivision_team__subdivision_detail__name__iexact=filters["subdivision_2"].strip()
            )
        if filters["subdivision_3"]:
            queryset = queryset.filter(
                subdivision_team__name__iexact=filters["subdivision_3"].strip()
            )
        if filters["subdivision_4"]:
            queryset = queryset.filter(
                additional_office__name__iexact=filters["subdivision_4"].strip()
            )
        if filters["functional_block"]:
            queryset = queryset.filter(
                subdivision_team__subdivision_detail__subdivision__functional_block__name__iexact=filters["functional_block"].strip()
            )
        if filters["position"]:
            queryset = queryset.filter(
                position__name__iexact=filters["position"].strip()
            )
        if filters["role"]:
            queryset = queryset.filter(
                role__name__iexact=filters["role"].strip()
            )
        if filters["surname"]:
            queryset = queryset.filter(
                surname__icontains=filters["surname"].strip()
            )
        if filters["name"]:
            queryset = queryset.filter(
                name__icontains=filters["name"].strip()
            )
        if filters["phone"]:
            queryset = queryset.filter(
                phone__icontains=filters["phone"].strip()
            )
        if filters["city"]:
            queryset = queryset.filter(
                city__icontains=filters["city"].strip()
            )
        if filters["address"]:
            queryset = queryset.filter(
                address__icontains=filters["address"].strip()
            )
    except Exception as e:
        logger.error(f"Ошибка при применении фильтров: {str(e)}")
        return Response({"error": "Ошибка при фильтрации данных"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Логирование SQL-запроса
    logger.info(f"Сгенерированный SQL-запрос: {queryset.query}")
    logger.info(f"Полученные параметры фильтрации: {request.data}")

    # Проверка на наличие данных
    if not queryset.exists():
        logger.warning("Фильтрация не нашла совпадений.")
        return Response({"error": "По указанным критериям данных не найдено"}, status=status.HTTP_404_NOT_FOUND)

    # Сериализация данных
    serializer = EmployeeSerializer(queryset, many=True)

    # Возврат ответа
    return Response(serializer.data, status=status.HTTP_200_OK)

