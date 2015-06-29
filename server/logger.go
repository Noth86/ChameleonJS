package main

import (
    "net/http"
    "log"
    "log/syslog"
)

func handler(w http.ResponseWriter, r *http.Request) {
    browser := r.FormValue("browser")
    message := r.FormValue("message")
    file := r.FormValue("file")
    line := r.FormValue("line")
    column := r.FormValue("column")
    errorString := r.FormValue("error")

    log.Printf("Browser: %s Message: %s File: %s Line: %s Column: %s Error: %s", browser, message, file, line, column, errorString)
}

func init() {
    logwriter, e := syslog.New(syslog.LOG_NOTICE, "logger")
    if e == nil {
        log.SetOutput(logwriter)
    }
}

func main() {
    http.HandleFunc("/logger", handler)
    http.ListenAndServe(":8080", nil)
}
