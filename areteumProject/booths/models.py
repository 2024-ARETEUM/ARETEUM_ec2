from django.db import models


class Booth(models.Model):
    name = models.CharField(verbose_name='부스명', max_length=50)
    host = models.CharField(verbose_name='운영주체', max_length=50, blank=True, null=True)
    place = models.CharField(verbose_name='위치', max_length=50)

    DATES = [ 
        ('day1', 'day1'),
        ('day2', 'day2'),
        ('both', 'both'),
    ]
    date = models.CharField(verbose_name='날짜', max_length=10, choices=DATES)
    time_day1 = models.CharField(verbose_name='10/1 운영시간', max_length=20, blank=True, null=True)
    time_day2 = models.CharField(verbose_name='10/2 운영시간', max_length=20, blank=True, null=True)

    CATEGORIES = [
        ('체험', '체험'),
        ('한잔하솜', '한잔하솜'),
        ('마켓', '마켓'),
        ('체험/마켓', '체험/마켓'),
        ('푸드트럭', '푸드트럭'),
    ]
    category = models.CharField(verbose_name='카테고리', max_length=10, choices=CATEGORIES)

    introduction = models.TextField(verbose_name='부스소개', blank=True, null=True)
    image = models.ImageField(verbose_name='사진', upload_to='booth-image', blank=True, null=True)

    def __str__(self):
        return self.name


class MenuGroup(models.Model):
    name = models.CharField(verbose_name='메뉴그룹명', max_length=50)
    price = models.CharField(verbose_name='가격', max_length=20, blank=True, null=True)
    booth = models.ForeignKey(Booth, related_name='menu_group', on_delete=models.CASCADE, verbose_name='해당 부스')

    def __str__(self):
        return f'{self.booth.name} > {self.name}'
    
class Food(models.Model):
    name = models.TextField(verbose_name='음식명', max_length=50)
    price = models.CharField(verbose_name='가격', max_length=20, blank=True, null=True)
    menu_group = models.ForeignKey(MenuGroup, related_name='inner_food', on_delete=models.CASCADE, verbose_name='해당 메뉴그룹')

    def __str__(self):
        return f'{self.menu_group.booth.name} > {self.menu_group.name} > {self.name}'
    
class SomTalk(models.Model):
    time = models.DateTimeField(verbose_name='작성시간', auto_now_add=True)
    comment = models.TextField(verbose_name='내용', max_length=44)
    
    def __str__(self):
        return self.comment
