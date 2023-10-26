import { Component, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';
import * as $ from 'jquery';
import { NgwWowService } from 'ngx-wow';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arooj Saghar | Frontend Developer';
  fileURL = 'https://docdro.id/4eyDWUi';
  // imgPath = "assets/images/portfolio/Logo.jpg";
  contactform : FormGroup;
  isSubmit = true;
  submitMessage = '';

  constructor(private wowService: NgwWowService, private formBuilder: FormBuilder) {
    this.wowService.init();
  }

  ngOnInit(): void {

    AOS.init();
    const imgContent = document.querySelectorAll<HTMLElement>('.img-content-hover');

    function showImgContent(e: { pageX: any; pageY: any; }) {
      for (var i = 0; i < imgContent.length; i++) {
        const x = e.pageX;
        const y = e.pageY;
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    document.addEventListener('mousemove', showImgContent);

    $(window).on("load", function () {
      var $ = require('jquery');
      var mixItUp = require('mixitup');
      var $container = $('.galleryContainer');
      // $container.isotope({
      //   filter: '*',
      //   animationOptions: {
      //     queue: true
      //   }
      // });
      $('.gallery_nav li').click(() => {
        $('.gallery_nav .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        // $container.isotope({
        //   filter: selector,
        //   animationOptions: {
        //     queue: true
        //   }
        // });
        return false
      });
      // $('#portfolio').mixItUp();
    });
  }


  togglemenu() {
    $(".sidemenu").addClass("active");
  }
  closemenu() {
    $(".sidemenu").removeClass("active");
  }

  onSubmit() {

  }
  // (scroll)="onWindowScroll()"
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      $(".header_row").addClass("sticky");
      // this.imgPath = "assets/images/portfolio/Logo3.png";
    } else {
      $(".header_row").removeClass("sticky");
      // this.imgPath = "assets/images/portfolio/Logo2.png";
    }
  }

}
