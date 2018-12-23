import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kelime Oluşturma Sihirbazı';

  isGenerated = false;

  vowels = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
  consonants = ['b', 'c', 'ç', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'ş', 't', 'v', 'y', 'z'];

  // inputs
  one = 0;
  two = 0;
  three = 0;
  four = 0;

  // generated lists
  oneList = [];
  twoList = [];
  threeList = [];
  fourList = [];

  generate() {
    this.oneList = [];
    this.twoList = [];
    this.threeList = [];
    this.fourList = [];

    if (this.one > 0) {
      for (let i = 0; i < this.one; i++) {
        this.oneList.push(this.generateOne());
      }
      this.isGenerated = true;
    }

    if (this.two > 0) {
      for (let i = 0; i < this.two; i++) {
        this.twoList.push(this.generateTwo());
      }
      this.isGenerated = true;
    }

    if (this.three > 0) {
      for (let i = 0; i < this.three; i++) {
        this.threeList.push(this.generateThree());
      }
      this.isGenerated = true;
    }

    if (this.four > 0) {
      for (let i = 0; i < this.four; i++) {
        this.fourList.push(this.generateFour());
      }
      this.isGenerated = true;
    }
  }

  // one syllable word
  generateOne() {
    const order = Math.floor(Math.random() * 2) + 1;
    return order === 1 ? this.twoLetterSyllable() : this.threeLetterSyllable();
  }

  // two syllable word
  generateTwo() {
    return this.generateOne() + this.generateOne();
  }

  // three syllable word
  generateThree() {
    return this.twoLetterSyllable() + this.twoLetterSyllable() + this.twoLetterSyllable();
  }

  // four syllable word
  generateFour() {
    return this.twoLetterSyllable() + this.twoLetterSyllable() + this.twoLetterSyllable() + this.twoLetterSyllable();
  }

  // generates like 'ab', 'ba'
  twoLetterSyllable() {
    const order = Math.floor(Math.random() * 2) + 1;
    const vowRand = Math.floor(Math.random() * 8);
    const consRand = Math.floor(Math.random() * 11);

    return order === 1 ?
      this.vowels[vowRand] + this.consonants[consRand] :
      this.consonants[consRand] + this.vowels[vowRand];
  }

  // generates like 'art', 'tar', 'tra'
  threeLetterSyllable() {
    const order = Math.floor(Math.random() * 3) + 1;
    const vowRand = Math.floor(Math.random() * 8);
    const consRand = Math.floor(Math.random() * 11);
    const consRand2 = Math.floor(Math.random() * 11);

    return order === 1 ?
      this.vowels[vowRand] + this.consonants[consRand] + this.consonants[consRand2] :
      (order === 2 ?
        this.consonants[consRand] + this.vowels[vowRand] + this.consonants[consRand2] :
        this.consonants[consRand] + this.consonants[consRand2] + this.vowels[vowRand]);
  }

  printData() {
    window.print();
  }

  // input validation
  preventInput(event) {
    let value = this.one;
    if (value >= 999) {
      event.preventDefault();
      this.one = parseInt(value.toString().substring(0, 2), 10);
    }
    value = this.two;
    if (value >= 999) {
      event.preventDefault();
      this.two = parseInt(value.toString().substring(0, 2), 10);
    }
    value = this.three;
    if (value >= 999) {
      event.preventDefault();
      this.three = parseInt(value.toString().substring(0, 2), 10);
    }
    value = this.four;
    if (value >= 999) {
      event.preventDefault();
      this.four = parseInt(value.toString().substring(0, 2), 10);
    }
  }

}
