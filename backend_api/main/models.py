from django.db import models
from django.contrib.auth.models import User

# Create your models here.


# Vendor models
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)

    def __str__(self):
        return self.user.username


# Product Category
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    details = models.TextField(null=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    category = models.ForeignKey(
        ProductCategory,
        on_delete=models.SET_NULL,
        null=True,
        related_name="category_product",
    )
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    details = models.TextField(null=True)
    price = models.FloatField()

    def __str__(self):
        return self.title


# Customer Model
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField()

    def __str__(self):
        return self.user.username


# DeliveryAgent Model
class DeliveryAgent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField()
    location = models.CharField(max_length=200)

    def __str__(self):
        return self.user.username


# Order Model
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)


# Order Items Model
class OrderItems(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name="order_items"
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title


# Custeomre address model
class CustomerAddress(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="customer_addresses"
    )
    address = models.TextField()
    default_address = models.BooleanField(default=False)

    def __str__(self):
        return self.address


# Ratings and Reviews
class ProductRating(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="rating_customers"
    )
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_ratings"
    )
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.rating} - {self.reviews}"
