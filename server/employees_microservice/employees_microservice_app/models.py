# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Additionaloffices(models.Model):
    name = models.CharField(unique=True, max_length=255)
    subdivision = models.ForeignKey('Subdivisions', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'additionaloffices'


class Employees(models.Model):
    surname = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    position = models.ForeignKey('Positions', models.DO_NOTHING, blank=True, null=True)
    role = models.ForeignKey('Roles', models.DO_NOTHING, blank=True, null=True)
    subdivision_team = models.ForeignKey('Subdivisionteams', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'employees'


class Functionalblocks(models.Model):
    name = models.CharField(unique=True, max_length=255)

    class Meta:
        managed = False
        db_table = 'functionalblocks'


class Positions(models.Model):
    name = models.CharField(unique=True, max_length=255)

    class Meta:
        managed = False
        db_table = 'positions'


class Roles(models.Model):
    name = models.CharField(unique=True, max_length=255)

    class Meta:
        managed = False
        db_table = 'roles'


class Subdivisiondetails(models.Model):
    name = models.CharField(unique=True, max_length=255)
    subdivision = models.ForeignKey('Subdivisions', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'subdivisiondetails'


class Subdivisions(models.Model):
    name = models.CharField(unique=True, max_length=255)
    functional_block = models.ForeignKey(Functionalblocks, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'subdivisions'


class Subdivisionteams(models.Model):
    name = models.CharField(unique=True, max_length=255)
    subdivision_detail = models.ForeignKey(Subdivisiondetails, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'subdivisionteams'
