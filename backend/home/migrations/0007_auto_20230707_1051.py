# Generated by Django 2.2.28 on 2023-07-07 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_fvdf_addf'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fvdf',
            name='addf',
        ),
        migrations.AddField(
            model_name='fvdf',
            name='addf466',
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='fvdf',
            name='nvnv45',
            field=models.BigIntegerField(blank=True),
        ),
    ]
