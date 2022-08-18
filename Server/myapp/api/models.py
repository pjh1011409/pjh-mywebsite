from pyexpat import model
from unicodedata import category
from django.db import models
from datetime import datetime    

# Create your models here.
# python manage.py makemigrations
# python manage.py migrate
class Note(models.Model):
    category = models.CharField(max_length=20)
    title = models.CharField(max_length=20, default='')
    subTitle = models.CharField(max_length=30)
    body = models.TextField(null=True, blank=True)
    image = models.ImageField(null = True, blank=True)
    
    updated = models.DateTimeField(default=datetime.now) # 수정시 업데이트 날짜 생성
    created = models.DateTimeField(default=datetime.now) # 생성시 없데이트 날짜 생성


    def __str__(self):
            return self.category()
        
    def __str__(self):
            return self.title()
        
    def __str__(self):
            return self.subTitle()
        
    def __str__(self):
        return self.body[0:300]
    
#     def __str__(self):
#         return self.updated()

#     def __str__(self):
#         return self.created()
   
#django framework 에서 데이터모델을 만들어주는 역할을 하고 있는 파일이다.
# models.py 파일안에 클래스형으로 데이터 모델을 만들어주면 장고가 ORM(object-oriented-mapping)
# 을 통해 데이터베이스에 데이터 모델을 생성해준다.

#ORM은 python 으로 작성된 class 기반의 모델을 sql database 에
# 저장할 수 있게 자동으로 바꾸어 주는 역할은 한다.