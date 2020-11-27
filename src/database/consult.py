import pyodbc
import pandas as pd
from abc import ABCMeta, abstractclassmethod

pre_count = """
            SELECT COUNT(*) FROM epreprem
            WHERE admsts_codigo IN (4,11)
            """
pre_vigentes = """
            SELECT * FROM epreprem
            WHERE admsts_codigo IN (4,11)
            """
pre_cuotas = """
            SELECT epreprem.cuecta_numid, precuo_numcuota,
            precuo_moncap FROM epreprem 
            INNER JOIN eprecuom 
            ON epreprem.cuecta_numid=eprecuom.cuecta_numid
            """

# When autocommit=False 
# a manual commit or rollback is required
# cur.commit()
conn_11 = pyodbc.connect("DSN=Banke11", autocommit=False)
print("Conectado al servidor 11.")
# Cursor
pre_cur = conn_11.cursor()
# cuota_cur = conn_11.cursor()

# tables = cur.tables().fetchall()
# cuotas  = cuota_cur.execute(pre_cuotas).fetchall()
# vigentes = pre_cur.execute(pre_vigentes).fetchall()
count = pre_cur.execute(pre_count).fetchall()
print(count)

# cuotas_df = pd.DataFrame(cuotas)
# vigentes_df = pd.DataFrame(vigentes)

# print(cuotas_df.head())

# Get table column names from cursor.
# table_cols = [column[0] for column in cuota_cur.description]
# print('printing vigentes...')
# print(vigentes_df)

# Column values for each row.
#table_vals = [pre for pre in epreprem[0]]

# cuotasdf_form = pd.DataFrame({
#     'Cuentas' : pd.Series(cuotas[0][0]),
#     'No. Cuotas' : pd.Series(cuotas[0][1]),
#     'Monto' : pd.Series(cuotas[0][2])
#     })

# print(cuotasdf_form)