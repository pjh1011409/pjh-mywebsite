from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from .models import Question
from django.utils import timezone

def index(request):
    return HttpResponse("안녕하세요 pybo에 오신것을 환영합니다.")

def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    context = {'question': question}
    return render(request, 'pybo/question_detail.html', context)

def answer_create(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    question.answer_set.create(content=request.POST.get('content'), create_date=timezone.now())
    return redirect('pybo:detail', question_id=question.id)