function getCookie(cookieName)
{
    var cks = document.cookie.split("; ")
    for (let i = 0; i < cks.length; i++)
        if (cks[i].split('=')[0] == cookieName)
        {
            let v = cks[i].split('=')[1];
            return v.at(-1) == ';' ? v.substring(0, v.length - 1) : v;
        }
    return "";
}

function setCookie(cookieName, cookieValue)
{
    document.cookie = `${cookieName}=${cookieValue};`;
}

var localStorage = {
    setItem:function(key,value){
        setCookie(key, value)
    },
    getItem:function(key){
        getCookie(key)
    }
}