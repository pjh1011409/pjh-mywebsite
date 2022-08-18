from html.entities import name2codepoint
from rest_framework.serializers import ModelSerializer
from .models import Note
class NoteSerializer(ModelSerializer):
                    
    class Meta:
        model = Note
        fields = '__all__'
        
        #Serializer(시리얼라이저)는 DRF가 제공하는 클래스인데, 
# DB 인스턴스를 JSON 데이터로 생성한다.