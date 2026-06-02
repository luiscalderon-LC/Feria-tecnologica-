from flask import Flask, render_template, jsonify, request

# Flask por defecto busca 'templates' para los HTML y 'static' para los assets
app = Flask(__name__)

@app.route('/')
def home():
    # Flask buscará automáticamente dentro de la carpeta 'templates'
    return render_template('index.html')

@app.route('/api/clicks', methods=['POST'])
def registrar_click():
    data = request.get_json()
    boton = data.get('boton', 'desconocido')
    print(f"🎮 Evento recibido: Usuario hizo clic en [{boton}]")
    return jsonify({"status": "ok", "mensaje": "Métrica registrada"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)