@if($type=='desktop')
    @include('service', ['code'=>'service1', 'title'=>'Разработка архитектурных проектов'])
    @include('service', ['code'=>'service2', 'title'=>'Дизайн  интерьеров'])
    @include('service', ['code'=>'service3', 'title'=>'Разработка проектной документации'])
    @include('service', ['code'=>'service4', 'title'=>'Разработка проектов зоны охраны ОКН'])
    @include('service', ['code'=>'service5', 'title'=>'Разработка ПД по реставрации и приспособлению ОКН'])
    @include('service', ['code'=>'service6', 'title'=>'Юридическое<br />сопровождение'])
@elseif($type=='mobile')
    @include('service', ['code'=>'service1', 'title'=>'Разработка архитектурных проектов'])
    @include('service', ['code'=>'service2', 'title'=>'Дизайн  интерьеров'])
    @include('service', ['code'=>'service3', 'title'=>'Разработка проектной документации'])
@endif
