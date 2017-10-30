import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'titlecasting'
})
export class TitleCastingPipe implements PipeTransform {

    transform(value: string, args: any) {
        if (!value || value.split(' ').length <= 0)
            return null;

        let preps = ["of", "on", "and", "or", "in", "a", "the"];
        return value.toLowerCase().split(' ').map(function(word, index) {
                if (!word)
                    return word;

                let response = (index == 0 || preps.indexOf(word) == -1) ? 
                    word.replace(word[0], word[0].toUpperCase()) : word;

                return response;
        }).join(' ');
    }
}