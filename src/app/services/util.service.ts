import { Injectable } from "@angular/core"

@Injectable()
export class UtilService {
  constructor() {}

  public static pickRandomArray(array: any[], nbEl: number) {
    const retArray = []
    const indexArray = []
    const nbValid = nbEl <= array.length
    let nb = 0
    if (nbValid) {
      nb = nbEl
    }
    else {
      nb = array.length
    }
    for (let i = 0; i < nb; i++) {
      let randomIndex = null
      let isElAlreadyPresent = false
      do {
        randomIndex = Math.floor(Math.random() * array.length)
        isElAlreadyPresent =
          randomIndex !== null &&
          indexArray.includes(randomIndex)
      } while (isElAlreadyPresent)
      indexArray.push(randomIndex)
      retArray.push(array[randomIndex])
    }

    console.log(retArray)
    return retArray
  }
}
