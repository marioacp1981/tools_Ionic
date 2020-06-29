import { Component, OnInit,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  //PARA desavilitar ininit scroll cuendo llegue al final 
  @ViewChild(IonInfiniteScroll) infitniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }
  loadData(event) {
    console.log('Cargando siguientes....');

    setTimeout(() => {

      if ( this.data.length > 70 ) {
        event.target.complete();
        this.infitniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr );
      event.target.complete();

    }, 1000 );

  }

}
