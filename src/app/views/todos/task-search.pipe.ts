import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskSearch'
})
export class TaskSearchPipe implements PipeTransform {

  transform(taskList, searchStr: string) {
    if (taskList.length === 0 || searchStr === '') {
      return taskList;
    }

    return taskList.filter(task => task.name
      .toLocaleLowerCase()
      .indexOf(searchStr.toLocaleLowerCase()) !== -1
      ||
      task.description
      .toLocaleLowerCase()
      .indexOf(searchStr.toLocaleLowerCase()) !== -1
    );
  }

}
