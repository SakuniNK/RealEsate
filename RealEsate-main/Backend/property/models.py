from django.db import models

class Property(models.Model):
    title = models.CharField(max_length=150, null=False, blank=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    content = models.TextField()
    type = models.CharField(max_length=50, null=False, blank=False)
    category = models.CharField(max_length=50, null=False, blank=False)
    location = models.CharField(max_length=150, null=False, blank=False)
    bedroom = models.IntegerField(null=True, blank=True)
    bathroom = models.IntegerField(null=True, blank=True)
    hall = models.IntegerField(null=True, blank=True)
    kitchen = models.IntegerField(null=True, blank=True)
    image = models.ImageField(upload_to='upload/images', null=False, blank=False)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)  # Allow null

    def _str_(self):
        return self.title