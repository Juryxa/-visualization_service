from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models import Employees
from ..serializers import EmployeeSerializer
import logging

logger = logging.getLogger(__name__)

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

