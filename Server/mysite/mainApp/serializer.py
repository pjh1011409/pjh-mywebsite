#Serializer(시리얼라이저)는 DRF가 제공하는 클래스인데, 
# DB 인스턴스를 JSON 데이터로 생성한다.

from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class  Meta:
        model = Review
        fields = ('category','id', 'title', 'content', 'updated_at')