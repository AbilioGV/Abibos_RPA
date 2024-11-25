import { useState, useEffect, Fragment } from 'react'
import { useAuth } from "../contexts/auth-context";
import { Navigate } from 'react-router-dom'
import styles from './Dashboard.module.css'
import PropTypes from 'prop-types';
import { CaretDoubleDown, CaretDoubleRight } from '@phosphor-icons/react';


const orderShape = PropTypes.shape({
  ds_title_order: PropTypes.string.isRequired,
  ds_name_process: PropTypes.string.isRequired,
  ds_process: PropTypes.string.isRequired,
  cd_status_order: PropTypes.string.isRequired,
});

export function Dashboard() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch('http://localhost:3000/dashboard', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Falha ao buscar pedidos');
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };

    if (user?.role === 1) {
      fetchPedidos();
    }
  }, [user]);

  if (user?.role !== 1) {
    return <Navigate to="/" />;
  }



  const getStatusText = (statusCode) => {
    const statusMap = {
      3: 'Ativo',
      4: 'Inativo',
      7: 'Em andamento'
    };

    return statusMap[statusCode] || 'Status Desconhecido';
  };

  const getStatusClass = (statusCode) => {
    const classMap = {
      3: 'status-aprovado',
      4: 'status-rejeitado',
      7: 'status-pendente'
    };

    return classMap[statusCode] || 'status-desconhecido';
  };

  const toggleRowExpansion = (index) => {
    setExpandedRows(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className={styles.dashboardContainer}>
      <h1>Pedidos realizados</h1>
      <div className={styles.orderList}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Nome da Empresa</th>
              <th>Nome do Processo</th>
              <th>Descrição do Processo</th>
              <th>Objetivo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Fragment key={index}>
                <tr key={index}>
                  <td>
                    <button
                      onClick={() => toggleRowExpansion(index)}
                      className={styles.expandButton}
                    >
                      {expandedRows[index] ? <CaretDoubleDown /> : <CaretDoubleRight />}
                    </button>
                  </td>
                  <td>{order.cd_company}</td>
                  <td>{order.ds_name_process}</td>
                  <td>{order.ds_process}</td>
                  <td>{order.ds_obj_aut}</td>
                  <td>
                    <div className={`${styles.statusColor} ${styles[getStatusClass(order.cd_status_order)]}`}>
                    </div>
                    {getStatusText(order.cd_status_order)}
                  </td>
                </tr>
                {expandedRows[index] && (
                  <tr className={styles.expandedDetailsRow}>
                    <td colSpan="6">
                      <div className={styles.expandedDetails}>
                        <p><strong>Empresa:</strong> {order.cd_company}</p>
                        <p><strong>Processo:</strong> {order.ds_name_process}</p>
                        <p><strong>Descrição Detalhada:</strong> {order.ds_process}</p>
                        <p><strong>Objetivo:</strong> {order.ds_obj_aut}</p>
                        <p><strong>Status Atual:</strong> {getStatusText(order.cd_status_order)}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}

Dashboard.propTypes = {
  orders: PropTypes.arrayOf(orderShape),
};