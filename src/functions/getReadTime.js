export const getReadTime = () => {
    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                   html.clientHeight, html.scrollHeight, html.offsetHeight );

                   if (height < 1300) {
        return '1 minute read'
    } else if (height > 1500 && height < 2000) {
        return '2 minutes read'
    } else if (height > 2000 && height < 2500) {
        return '3 minutes read'
    } else if (height > 2500 && height < 3000) {
        return '4 minutes read'
    } else if (height > 3000 && height < 3500) {
        return '5 minutes read'
    } else if (height > 3500 && height < 4000) {
        return '6 minutes read'
    } else if (height > 4000 && height < 4500) {
        return '7 minutes read'
    } else if (height > 4500 && height < 5000) {
        return '8 minutes read'
    } else if (height > 5000) {
        return '+8 minutes read'
    }
}