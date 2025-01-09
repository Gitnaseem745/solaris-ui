export const toCapitalCase = (title: string) => {
    const len: number = title.length;
    let capitalized: string = "";
    for(let i = 0; i<len; i++){
        if(i === 0) {
            capitalized += title.charAt(i).toUpperCase();
            continue;
        }
        if(title.charAt(i-1) === ' '){
            capitalized += title.charAt(i).toUpperCase();
            continue;
        }
        capitalized += title.charAt(i);
    }
    return capitalized;
}
