import { Pipe, PipeTransform } from "@angular/core"
import { UtilService } from "../services/util.service"

@Pipe({
  name: "sortRandom"
})
export class SortRandomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return UtilService.shuffle(value)
  }
}
