from django.shortcuts import render
from newsapi import NewsApiClient
import datetime


def index(request):
      today=str(datetime.date.today())
      newsapi=NewsApiClient(api_key='9403f36e77fa4baab4908c80df509015')
      top=newsapi.get_top_headlines(language='en', pageSize=100)
    
      all=top['articles']
      desc=[]
      url=[]
      news=[]
      img=[]
      time=[]
    
      for i in range(len(all)):
        each=all[i]
        news.append(each['title'])
        desc.append(each['description'])
        img.append(each['urlToImage'])
        url.append(each['url'])
        time.append(each['publishedAt'])
      mylist=zip(news, desc, img, url,time)
    
      return render(request, 'news/index.html', context={'mylist':mylist})

def home(request):
  return render(request, 'news/home.html')

def about(request):
  return render(request, 'news/about.html')
