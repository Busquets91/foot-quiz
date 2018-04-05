import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  public static pickRandomArray(array: any[], nbEl: number) {
    const retArray = []
    const indexArray = []
    for (let i = 0; i < nbEl; i++) {
      let randomIndex = null
      let isElAlreadyPresent = false
      do {
        randomIndex = Math.floor(Math.random() * array.length)
        isElAlreadyPresent =
          randomIndex !== null && indexArray.includes(randomIndex)
      } while (isElAlreadyPresent)
      indexArray.push(randomIndex)
      retArray.push(array[randomIndex])
    }
    return retArray
  }

}
