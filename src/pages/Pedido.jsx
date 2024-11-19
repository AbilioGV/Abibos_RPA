import { useState } from "react";

import styles from "./Pedido.module.css";
import { Button } from "../components/Button";

import "../global.css";
import { useAuth } from "../contexts/auth-context";
import { Navigate } from "react-router-dom";

export function Pedido() {

  const { user } = useAuth();

  const [formData, setFormData] = useState({
    ename: "",
    pname: "",
    desc: "",
    objetivo: "",
    volume: "",
    comentario: "",
    frequencia: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*     const processName = formData.get("processName")

    const processDescription = formData.get("processDescription")

    const automationGoal = formData.get("automationGoal")

    const executionFrequency = formData.get("executionFrequency")

    const processingVolume = formData.get("processingVolume")

    const additionalComments = formData.get("additionalComments") */

    const response = await fetch("http://localhost:3000/pedido", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
  };

  
  if (!user) {
    return <Navigate to="/login"/>
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="pedido">Pedido de Serviço</h2>
      <p>
        Preencha este formulário para que possamos entender inicialmente seu
        problema e, em seguida, entrar em contato para oferecer o suporte
        necessário.
      </p>
      <section>
        <h3>Informações de Contato</h3>
        <input
          name="ename"
          type="name"
          placeholder="Nome da Empresa"
          onChange={handleChange}
          value={formData.ename}
        />
        {/* <input name="phone" type="tel" placeholder="Telefone" onChange={handleChange} /> */}
      </section>

      <section>
        <h3>Descrição do Processo</h3>
        <input
          name="pname"
          type="name"
          placeholder="Nome do Processo"
          onChange={handleChange}
          value={formData.pname}
        />
        <textarea
          name="desc"
          placeholder="Descrição do Processo"
          onChange={handleChange}
          rows="3"
          value={formData.desc}
        />
        <textarea
          name="objetivo"
          placeholder="Objetivo da Automação"
          onChange={handleChange}
          rows="3"
          value={formData.objetivo}
        />
      </section>

      <section>
        <h3>Requisitos e Prioridades</h3>
        <select
          name="frequencia"
          onChange={handleChange}
          value={formData.frequencia}
        >
          <option value="">Frequência de Execução</option>
          <option value="Diária">Diária</option>
          <option value="Semanal">Semanal</option>
          <option value="Mensal">Mensal</option>
        </select>
        <select name="volume" onChange={handleChange} value={formData.volume}>
          <option value="">Prioridade do Projeto</option>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </select>
      </section>

      <section>
        <h3>Observações e Consentimento</h3>
        <textarea
          name="comentario"
          placeholder="Comentários Adicionais"
          onChange={handleChange}
          value={formData.comentario}
          rows="3"
        />
      </section>

      <div className={styles.formBtn}>
        <Button type="submit">Enviar Pedido</Button>
      </div>
    </form>
  );
}
