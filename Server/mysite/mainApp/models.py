from unicodedata import category
from django.db import models

# Create your models here.


class Review(models.Model):
   
   
    title = models.CharField(max_length=50)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)
    
    
#django framework 에서 데이터모델을 만들어주는 역할을 하고 있는 파일이다.
# models.py 파일안에 클래스형으로 데이터 모델을 만들어주면 장고가 ORM(object-oriented-mapping)
# 을 통해 데이터베이스에 데이터 모델을 생성해준다.

#ORM은 python 으로 작성된 class 기반의 모델을 sql database 에
# 저장할 수 있게 자동으로 바꾸어 주는 역할은 한다.