function Init() {
    var elt = document.getElementById("wlogin");
    elt.onclick = function () {
        var query = {
            login: null,
            pwd: null
        };
        query.login = document.getElementById("identifiant").value;
        query.pwd = md5(document.getElementById("motdepasse").value);
        getAjax("ink/ikar01.php", JSON.stringify(query), function (data) {
            Response(data);
        });
    };
}

function Response(txt) {
    alert(txt);
}

function getAjax(url, para, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200)
            success(xhr.responseText);
    };
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("data=" + para);
    return xhr;
}