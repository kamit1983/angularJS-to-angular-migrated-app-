export const html = `<nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Angular 1.x to 5 migration</a>
      </div>
  
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav pull-right">
            <li><a href="#!/home">Home</a></li>
            <li><a href="#!/admissions">Route-2</a></li>
            <li><a href="#!/career">Route-3</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
<div id='maincarousel' style="display:none">
  <div class="row">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox" style="padding: 30px;">
        <div class="item active">
          <img ng-src="/assets/images/n0.png" alt="Chania">
          <div class="carousel-caption">
            <h3>Angular Migration</h3>
            <p>1.x to 5+</p>
          </div>
        </div>
        <div class="item ">
          <img ng-src="/assets/images/n1.png" alt="Chania">
        </div>
        <div class="item ">
          <img ng-src="/assets/images/n2.png" alt="Chania">
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
  </div>
</div>
<div ng-view style="margin:10px 0 0 0"></div>
<section id="contact">
  <div class="container">
    <div class="row" id="contactRow">
      <div class="col-lg-8 col-lg-offset-2 text-center">
        <h2 class="section-heading">Angular1 App Footer</h2>
      </div>
    </div>

  </div>
</section>

`