import { Component } from '@angular/core';
import { from, takeUntil, Subject, take, skip } from 'rxjs';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss'],
})
export class ScrollDownComponent {
  currentAnimals: string[] = [];
  subject: any = new Subject();
  animals = from([
    'dog',
    'cat',
    'mouse',
    'lion',
    'tiger',
    'bear',
    'elephant',
    'giraffe',
    'monkey',
    'deer',
    'zebra',
    'horse',
    'rhino',
    'hamster',
    'otter',
    'rabbit',
    'flamingo',
    'hippo',
    'crocodile',
    'turtle',
    'pig',
    'duck',
    'fox',
    'goat',
    'sheep',
    'cow',
    'falcon',
    'pigeon',
    'parrot',
    'rooster',
    'ostrich',
    'vulture',
    'skunk',
    'squirrel',
    'armadillo',
    'beaver',
    'chipmunk',
    'coyote',
    'eagle',
    'owl',
    'hawk',
    'woodpecker',
    'finch',
    'sparrow',
    'dove',
    'stork',
    'swan',
    'pelican',
    'seagull',
    'heron',
    'crane',
    'deer',
    'antelope',
    'moose',
    'panther',
    'lynx',
    'cheetah',
    'badger',
    'mole',
    'mongoose',
    'opossum',
    'porcupine',
    'raccoon',
    'leopard',
    'jaguar',
    'baboon',
    'bearded dragon',
    'gecko',
    'iguana',
    'chameleon',
    'anaconda',
    'boa constrictor',
    'python',
    'toad',
    'frog',
    'tortoise',
    'salamander',
    'newt',
    'shark',
    'clownfish',
    'goldfish',
    'carp',
    'trout',
    'haddock',
    'cod',
    'lobster',
    'crab',
    'crayfish',
    'octopus',
    'oyster',
    'jellyfish',
    'starfish',
    'pufferfish',
    'seahorse',
    'eel',
    'dolphin',
    'whale',
    'killer whale',
    'manatee',
    'seal',
    'walrus',
    'otter',
    'sloth',
    'gibbon',
    'orangutan',
    'gorilla',
    'chimpanzee',
    'koala',
  ]);

  constructor() {
    this.animals.pipe(takeUntil(this.subject)).subscribe((x) => {
      this.currentAnimals.push(x);
      this.amountOfItemsToDisplay(this.currentAnimals.length);
    });
  }
  amountOfItemsToDisplay(amount: any): any {
    if (600 - (150 * amount) / 4 <= 0) {
      return this.subject.next('stop');
    }
  }

  addItemsOnScroll() {
    this.animals
      .pipe(skip(this.currentAnimals.length), take(4))
      .subscribe((x) => {
        this.currentAnimals.push(x);
      });
  }
}
