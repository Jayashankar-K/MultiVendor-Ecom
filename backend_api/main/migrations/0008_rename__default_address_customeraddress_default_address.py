# Generated by Django 5.0.3 on 2024-04-04 07:16

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0007_customeraddress__default_address"),
    ]

    operations = [
        migrations.RenameField(
            model_name="customeraddress",
            old_name="_default_address",
            new_name="default_address",
        ),
    ]