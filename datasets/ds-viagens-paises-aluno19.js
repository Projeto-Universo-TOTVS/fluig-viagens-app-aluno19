/**
 * Dataset customizado: ds-viagens-paises-aluno19
 * Lista de países para o app de viagens.
 * Colunas: codigo (ISO-3), nome (pt-BR), sigla (ISO-2).
 *
 * Código server-side (Rhino / ES5): usar apenas var e function tradicionais.
 */
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    try {
        dataset.addColumn("codigo");
        dataset.addColumn("nome");
        dataset.addColumn("sigla");

        var paises = [
            ["BRA", "Brasil", "BR"],
            ["ARG", "Argentina", "AR"],
            ["CHL", "Chile", "CL"],
            ["URY", "Uruguai", "UY"],
            ["PRY", "Paraguai", "PY"],
            ["PER", "Peru", "PE"],
            ["COL", "Colômbia", "CO"],
            ["MEX", "México", "MX"],
            ["USA", "Estados Unidos", "US"],
            ["CAN", "Canadá", "CA"],
            ["PRT", "Portugal", "PT"],
            ["ESP", "Espanha", "ES"],
            ["FRA", "França", "FR"],
            ["ITA", "Itália", "IT"],
            ["DEU", "Alemanha", "DE"],
            ["GBR", "Reino Unido", "GB"],
            ["NLD", "Países Baixos", "NL"],
            ["JPN", "Japão", "JP"],
            ["CHN", "China", "CN"],
            ["AUS", "Austrália", "AU"]
        ];

        for (var i = 0; i < paises.length; i++) {
            dataset.addRow(paises[i]);
        }
    } catch (e) {
        var erro = DatasetBuilder.newDataset();
        erro.addColumn("ERROR");
        erro.addRow([String(e.message || e)]);
        return erro;
    }

    return dataset;
}
