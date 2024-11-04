# PortoAutoTech

## Descrição

A **PortoAutoTech** tem como objetivo simplificar e automatizar o processo de manutenção de veículos, oferecendo uma plataforma inovadora que utiliza inteligência artificial para diagnósticos precisos e orçamentos confiáveis. Nossa solução atende proprietários de veículos que buscam confiança e praticidade ao lidar com a manutenção, eliminando a desconfiança em diagnósticos e dificuldades com mão de obra especializada.

## Diferenciais

- **Acessibilidade e Versatilidade**: Plataforma responsiva e acessível em diversos dispositivos, com métodos variados para detecção de problemas, incluindo chat, reconhecimento de fala, e futuramente, reconhecimento por imagem.
- **Manutenções Preventivas**: Após a primeira manutenção, o sistema mapeia o veículo e sugere manutenções preventivas futuras.
- **Automação Completa**: A plataforma oferece automação em todo o processo, com barras de progresso e outras funcionalidades que garantem uma experiência tranquila para o usuário.

## Video do Projeto
https://www.youtube.com/watch?v=Xk_73wwOvGo&ab_channel=FIAPKAIAN

## Instruções para Manipulação do Sistema

A plataforma **PortoAutoTech** ainda não está disponível online. O acesso é feito apenas localmente através do servidor da máquina, utilizando as tecnologias **React** , **Vite** e **Next**. Para rodar a aplicação, siga os passos abaixo:

1. Clone o repositório do projeto em sua máquina.
2. No terminal, navegue até o diretório do projeto.
3. Instale as dependências do projeto com o comando:
   ```bash
   npm install

4. Em seguida abra no terminal o arquivo
   ```bash
   Sprint 4 - IA\Sprint 4 - IA

5. Instale as seguintes dependências
    ```
    pip install pycaret --> python inferior ao python 3.12
    pip install git+https://github.com/pycaret/pycaret.git@master --> caso seja python 3.12+
    pip install flask
    pip install flask-cors
    pip install numpy
    pip install pandas

6. Rode no terminal o comando
   ```bash
   python api.py
  O prompt retornado deve ser semelhante a:
  
      Transformation Pipeline and Model Successfully Loaded
      Serving Flask app 'api'
      Debug mode: on
      WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
      Running on http://127.0.0.1:500

##Instalação e configuração do ambiente Java*\
   A api de Java foi desenvolvida no Eclipse Interprise
   
   1. IDE: Abra o projeto em uma IDE compatível (Eclipse, IntelliJ IDEA, ou NetBeans).
   2. Java JDK: Verifique se o JDK está instalado e configurado. Você pode verificar executando java -version no terminal.
   3. Oracle Database: Certifique-se de que o Oracle Database está instalado e em execução.
   4. JDBC Driver: Verifique se o ojdbc11 está no arquivo pom.xml para conexão com o Oracle Database.
   
##Configuração do Projeto Maven *\
      1. No arquivo pom.xml, você já incluiu as dependências essenciais, como ojdbc11 para o banco de dados Oracle, Jersey para o servidor REST, e Gson para manipulação de JSON.*\
      2. Certifique-se de que o maven-compiler-plugin está configurado para Java 17 (ou a versão que você está usando), e o maven-war-plugin para empacotar a aplicação como um arquivo WAR.

   
##Configuração do banco de dados Oracle   
      1. Execute os comandos SQL para criar as tabelas necessárias no Oracle Database. *\
      2. No código de configuração de banco de dados (credenciais package), adicione as credenciais do banco Oracle.

##Configuração do servidor TomCat*\
     1. Instale e configure o Tomcat, se ainda não o fez.*\
     2. No Eclipse: Servers > Tomcat v9.0 Server at localhost e adicione o projeto..*\
     3. Inicie o servidor Tomcat e verifique se a aplicação é carregada com sucesso, acessando no navegador:*\
     4. [dw](http://localhost:8080/sprint4-java/rest*\)


## Integrantes

Kaian Gustavo de Oliveira Nascimento Rm 558986*\
Giovanna Revito Roz Rm 558981*\
Lucas Kenji Kikuchi - RM554424*
