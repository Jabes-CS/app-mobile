from flask import Flask, request, jsonify
import pyodbc

def conecta_ao_banco(
    driver='{SQL Server}',
    server='NOTE_GABRIEL_PA\\SQLEXPRESS',
    database='master',
    username=None,
    password=None,
    trusted_connection='yes'
):
    # Corrigindo a string de conexão
    if trusted_connection.lower() == 'yes':
        string_conexao = (
            f"DRIVER={driver};"
            f"SERVER={server};"
            f"DATABASE={database};"
            f"TRUSTED_CONNECTION=yes;"
        )
    else:
        string_conexao = (
            f"DRIVER={driver};"
            f"SERVER={server};"
            f"DATABASE={database};"
            f"UID={username};"
            f"PWD={password};"
        )
    
    try:
        # Conectar ao banco de dados
        conexao = pyodbc.connect(string_conexao)
        cursor = conexao.cursor()
        print("Conexão estabelecida com sucesso!")
        return conexao, cursor
    except pyodbc.Error as e:
        print("Erro ao conectar:", e)
        return None, None

# Conectando ao banco
conexao, cursor = conecta_ao_banco()

#Instanciando Flask
app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return "Felipe Cabeçudo"

@app.route('/teste', methods=['POST'])
def teste():
    content = request.json
    print(str(content))
    return {"message": 200}





@app.route('/usuario/cadastro', methods=['POST'])
def cadastro():
    content = request.json

    email = content['email']
    senha = content['senha']

    if email and senha:
        #VERIFICAR SE JÁ TEM CADASTRO
        sql = "SELECT email FROM Usuarios WHERE email = ?"
        val = (user)

        cursor.execute(sql, val)
        user = cursor.fetchall()

        if not user: #verificar sintaxe
            #INSERT DATA INTO DATABASE AND GET TOKEN AND ID
            sql = "INSERT INTO Usuarios (email, senha) VALUES (?, ?)" #Confirmar como vai entrar no DB
            val = (email, senha)

            cursor.execute(sql, val)
            conexao.commit()
            print("Dados inseridos no DB com sucesso")

            #Ai eu dou um select no token que ele gerar? como faz?

 #Retornar ID?
        # SE TIVER:
            return {
                 "statusCode": 409,
                 "status": "error",
                 "message": "Usuario ja cadastrado"
                 }

        return {
                "statusCode": 400,
                "status": "error",
                "message": "Bad Request"
                } #Qual formato do retorno?


@app.route('/usuario/cadastro2', methods=['POST'])
def cadastro2():
    content = request.json

    nome = content['nome']
    data_nasc = content['data_nasc'] #mandar no formato
    telefone = content['telefone']
    email = content['email']
    senha = content['senha']
    cpf = content['cpf']
    cep = content['cep']
    salario = content['salario']
    data_salario = content['data_salario']
    credito_disponivel = content['salario']
    profissao = content['profissao']
    deseja_investir = bool(content['deseja_investir'])

    # if nome and data_nasc and telefone and email and senha and cpf and cep and salario and data_salario and credito_disponivel and profissao and deseja_investir:
    if nome and cpf:
        sql = "INSERT INTO Usuarios (nome, data_nasc, telefone, email, senha, cpf, cep, salario, data_salario, credito_disponivel, profissao, deseja_investir) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

        val = (nome, data_nasc, telefone, email, senha, cpf, cep, salario, data_salario, credito_disponivel, profissao, deseja_investir)
        try:
            cursor.execute(sql, val)
            conexao.commit()
        except Exception as e:
            print(str(e))
            return {
                 "statusCode": 500,
                 "status": "error",
                 "message": "Usuario ja cadastrado ou parametro invalido"
                }
 
        return {
            "statusCode": 200,
            "status": "success",
            # "data": {
            #     "usuario": {
            #         "id": "",
            #         "nome": "Maria Silva",
            #         "email": "maria.silva@example.com",
            #     }
            # },
            "message": "Usuario cadastro com sucesso"
            }
    return {
        "statusCode": 500,
        "status": "success",
        "message": "Falta de parametros"
    }

@app.route('/usuario/login', methods=['POST'])
def login():
    content = request.json

    email = content['email']
    senha = content['senha']

    if email and senha:

        sql = "SELECT email FROM Usuarios WHERE email = ? and senha = ?"
        val = (email, senha)

        cursor.execute(sql, val)
        user = cursor.fetchall()
        if not user: #Arrumar syntaxe
            return {
                "statusCode": 401,
                "status": "error",
                "message": "Email ou senha invalidos"
                }

        return {"statusCode": 200,
                "status": "success",
                "message": "Login feito com sucesso"} #sem token


@app.route('/extrato/list', methods=['POST'])
def extrato_list():
    content = request.json
    email = content['email']

    sql = "SELECT * FROM Extrato WHERE email = ?"
    val = (email)
    cursor.execute(sql, val)
    conexao.commit()

    rows = cursor.fetchall()

    extratos = []
    for row in rows:
        extrato = {
            "id": row[0],
            "nome_empresa": row[1],
            "preco": row[2],  
            "data_compra": row[3],
            "categoria": row[4],
            "cpf": row[5]
        }
        extratos.append(extrato)

    return { #exemplo
    "statusCode": 200,
    "status": "success",
    "data": {
        "extrato": [
            extrato
        ]
    },
    "message": "Extrato do usuario retornado com sucesso"
}


@app.route('/extrato/adicionar', methods=['POST'])
def extrato_adicionar():
        content = request.json

        #content = request.json
        preco = content['preco']
        data_compra = content['data_compra']
        categoria = content['categoria']
        descricao = content['descricao']
        cpf = content['cpf']

        if preco and data_compra and categoria and descricao and cpf:
            sql = "INSERT INTO Extrato (preco, data_compra, categoria, descricao, cpf) VALUES (?, ?, ?, ?, ?)"   
            val = (preco, data_compra, categoria, descricao, cpf)
            cursor.execute(sql, val)
            conexao.commit()
            cursor.fetchall()
            return {"statusCode": 200, 
                    "status": "success",
                    "message": "Extrato adicionado com sucesso"
}

        return {
        "statusCode": 400,
        "status": "error",
        "message": "Um erro inesperado aconteceu"
    }


@app.route('/extrato/atualizar', methods=['POST'])
def extrato_atualizar():
        content = request.json

        id = content['id']
        if id:
            sql = ""
            val = (id)

            cursor.execute(sql, val)
            conexao.commit()
            return {"statusCode": 200,
                    "status": "success",
                    "message": "Atualizado com sucesso"}


@app.route('/extrato/remover', methods=['POST'])
def extrato_remover():
        content = request.json
        id = content['id']
        if id:
            sql = "DELETE FROM Extrato WHERE id = ?"
            val = (id)
            cursor.execute(sql, val)
            conexao.commit()
            return {"statusCode": 200,
                    "status": "success",
                    "message": "Deletado com sucesso"}


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)

