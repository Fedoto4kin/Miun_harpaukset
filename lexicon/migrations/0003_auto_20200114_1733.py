# Generated by Django 3.0.2 on 2020-01-14 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lexicon', '0002_auto_20200114_1612'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('abbr', models.CharField(max_length=32)),
                ('name_ru', models.CharField(max_length=32)),
                ('name_fi', models.CharField(max_length=32)),
            ],
        ),
        migrations.AddField(
            model_name='word',
            name='orig',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='definition',
            name='definition',
            field=models.TextField(blank=True),
        ),
    ]
