# Generated by Django 2.2.28 on 2023-07-07 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_fnvn_rel_cvvrt_1_1'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fvdf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nvnv45', models.BigIntegerField()),
            ],
        ),
    ]