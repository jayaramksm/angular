import { Pipe } from '@angular/core';


@Pipe({
    name:'short'
})

export class ipecomponent{
transform(value,first){
return first+""+value
}
}
