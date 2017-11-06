from chalice import Chalice, Response
from urllib import unquote

app = Chalice(app_name='bookmark')

@app.route('/bookmark/{tosave}')
def bookmark(tosave):
    return Response(
            body="[InternetShortcut]\nURL=" + unquote(tosave) + "\n", 
            status_code=200, 
            headers={'Content-Type': 'text/plain'})
