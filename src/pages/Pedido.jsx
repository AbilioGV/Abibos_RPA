import { useState } from "react";

import styles from "./Pedido.module.css";
import { Button } from "../components/Button";

import "../global.css";

export function Pedido() {

  const [formData, setFormData] = useState({
    clientName: '',
    companyName: '',
    email: '',
    phone: '',
    processName: '',
    processDescription: '',
    automationGoal: '',
    executionFrequency: '',
    processingVolume: '',
    projectPriority: '',
    deadline: '',
    systemsUsed: '',
    dataAccess: '',
    executionEnvironment: '',
    securityRequirements: '',
    workflowSteps: '',
    processInputs: '',
    processOutputs: '',
    validationRequirements: '',
    additionalComments: '',
    acceptTerms: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="pedido">Pedido de Serviço</h2>

      <section>
        <h3>Informações de Contato</h3>
        <input name="clientName" type="name" placeholder="Nome do Cliente" onChange={handleChange} required />
        <input name="companyName" type="name" placeholder="Nome da Empresa" onChange={handleChange} />
        <input name="email" type="email" placeholder="E-mail" onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Telefone" onChange={handleChange} />
      </section>

      <section>
        <h3>Descrição do Processo</h3>
        <input name="processName" type="name" placeholder="Nome do Processo" onChange={handleChange} />
        <textarea name="processDescription" placeholder="Descrição do Processo" onChange={handleChange} rows="3" />
        <textarea name="automationGoal" placeholder="Objetivo da Automação" onChange={handleChange} rows="3" />
      </section>

      <section>
        <h3>Requisitos e Prioridades</h3>
        <select name="executionFrequency" onChange={handleChange}>
          <option value="">Frequência de Execução</option>
          <option value="Diária">Diária</option>
          <option value="Semanal">Semanal</option>
          <option value="Mensal">Mensal</option>
        </select>
        <input name="processingVolume" type="number" placeholder="Volume de Processamento" onChange={handleChange} />
        <select name="projectPriority" onChange={handleChange}>
          <option value="">Prioridade do Projeto</option>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </select>
        <input name="deadline" type="date" placeholder="Prazo para Entrega" onChange={handleChange} />
      </section>

      <section>
        <h3>Requisitos Técnicos</h3>
        <textarea name="systemsUsed" placeholder="Sistemas e Softwares Utilizados" onChange={handleChange} rows="3" />
        <textarea name="dataAccess" placeholder="Acesso a Dados Necessário" onChange={handleChange} rows="2" />
        <select name="executionEnvironment" onChange={handleChange}>
          <option value="">Ambiente de Execução</option>
          <option value="Nuvem">Nuvem</option>
          <option value="Servidor Local">Servidor Local</option>
          <option value="Máquina do Cliente">Máquina do Cliente</option>
        </select>
        <textarea name="securityRequirements" placeholder="Requisitos de Segurança" onChange={handleChange} rows="3" />
      </section>

      <section>
        <h3>Detalhes do Fluxo de Trabalho</h3>
        <textarea name="workflowSteps" placeholder="Etapas do Processo" onChange={handleChange} rows="3" />
        <textarea name="processInputs" placeholder="Entradas do Processo" onChange={handleChange} rows="3" />
        <textarea name="processOutputs" placeholder="Saídas do Processo" onChange={handleChange} rows="3" />
        <textarea name="validationRequirements" placeholder="Requisitos de Validação" onChange={handleChange} rows="3" />
      </section>

      <section>
        <h3>Observações e Consentimento</h3>
        <textarea name="additionalComments" placeholder="Comentários Adicionais" onChange={handleChange} rows="3" />
        <label>
          <input name="acceptTerms" type="checkbox" onChange={handleChange} />
          Aceito os termos e condições
        </label>
      </section>

      <Button type="submit">Enviar Pedido</Button>
    </form>
  );
};