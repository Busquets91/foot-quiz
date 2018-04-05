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
    } else {
      nb = array.length
    }
    for (let i = 0; i < nb; i++) {
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

  public static shuffle(a: any[]): any[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }
}
