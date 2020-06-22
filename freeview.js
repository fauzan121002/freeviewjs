/*! FreeviewJS | (c) Muhammad Fauzan | github.com/fauzan121002/freeviewjs/license.md */

// Synchronous Preview
function previewSync(e, t, r) {
    try {
        if ("string" != typeof e) throw new Error("parameter 0 must be defined as string.");
        if ("string" != typeof t) throw new Error("parameter 1 must be defined as string.");
        if ("number" != typeof r) throw new Error("parameter 2 must be defined as integer.");
    } catch (e) {
        console.error(e);
    }
}

// Asynchronous Preview
function preview(e, t, r) {
    new Promise((n, o) => {
        "string" != typeof e && o("parameter 0 must be defined as string."), "string" != typeof t && o("parameter 1 must be defined as string."), "number" != typeof r && o("parameter 2 must be defined as integer.");
        let i = document.getElementById(t),
            s = new FileReader();
        s.readAsDataURL(i.files[r]),
            (s.onload = (t) => {
                document.getElementById(e).src = t.target.result;
            });
    }).catch(console.error);
}

// Remove Current Preview Photo
function removePreview(e) {
    document.getElementById(e).src = "";
}

// Reset Input Type File Value 
function reset(e) {
    document.getElementById(e).value = "";
}

// Reset All Input Type File Value 
function resetAll() {
    document.querySelectorAll("input[type=file]").forEach((e) => {
        e.value = "";
    });
}
