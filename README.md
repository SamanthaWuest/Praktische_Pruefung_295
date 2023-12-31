# Praktische_Pruefung_295
- Projektname : Praktische Pruefung 295
- Autorin: Samantha Wüst
# Beschreibung
Die Praktische Pruefung 295, ist die zweite von 2 Pruefungen im Uek Modul 295. Es geht darum Endpunkte zu implementieren, mit den HTTP Verben. Die Dokumentation der OpenAPI wurde Swagger verwendet.
# Setup
- Node.js auf dem Laptop installieren
- npm installieren
- Docker herunterladen, wenn noch nicht installiert
- Docker oeffnen und neuen Container machen
- Neues Repository auf Git erstellen und dieses dann klonen
- Das Repository im zuvor erstellten Dockercontainer oeffnen
- Sobald noetig die Module installieren (express, express-autogen, express-session)
# Runtime
Damit man das Projekt starten kann muss zuerst:
1. In das Verzeichnis cd src wechseln
2. Sobald der Server gestartet werden will, dann muss in der Konsole node "namevomfile.js" eingegeben werden
3. Wenn die Endpunkte ausprobiert werden möchten, dann kann man das zum Beispiel mit https://hoppscotch.io tun.
# Endpunkte zu den Tasks
-GET/tasks -> alle Tasks werden ausgegeben
-GET/tasks/{id} -> der ausgewaehlte Task mit dieser ID wird ausgegeben
-POST/tasks -> einen neuen Task wird erstellt
-PATCH/tasks/{id} -> hier wird ein spezifischer Task verändert und danach wird der ganze Task wieder ausgegeben
-DELETE/tasks/{id} -> hier wird ein Task mit einer spezifischen Id geloescht
# Endpunkte zur Authentifizierung
-POST/login -> Wenn das ausgefuehrt wird, dann wird im Body die mitgegebene Email und das Password mit den gespeicherten Daten verglichen
-GET/verify -> Hier wird ueberprueft ob der Benutzer:in. Genauer gesagt wird ueberprueft ob die Email gespeichert ist oder nicht. Wenn sie gespeichert wurde, dann kommt der Code 200 zurück sonst der Code 401.
-DELETE/logout -> Mit DELETE/logout wird die Sitzung beendet, das Cookie wird nicht gespeichert. Das bekommen sie dann bei der nächsten Sitzung vom Browser wieder.

