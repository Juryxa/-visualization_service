from rest_framework import serializers
from .models import Employees


class EmployeeSerializer(serializers.ModelSerializer):
    # Добавляем связанные данные
    position = serializers.CharField(source='position.name', read_only=True)
    role = serializers.CharField(source='role.name', read_only=True)
    subdivision_1 = serializers.CharField(source='subdivision_team.subdivision_detail.subdivision.name', read_only=True)
    subdivision_2 = serializers.CharField(source='subdivision_team.subdivision_detail.name', read_only=True)
    subdivision_3 = serializers.CharField(source='subdivision_team.name', read_only=True)
    functional_block = serializers.CharField(source='subdivision_team.subdivision_detail.subdivision.functional_block.name', read_only=True)

    class Meta:
        model = Employees
        fields = [
            'id', 'surname', 'name', 'phone', 'city', 'address',
            'position', 'role', 'subdivision_1', 'subdivision_2',
            'subdivision_3', 'functional_block'
        ]
