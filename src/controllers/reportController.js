const PDFDocument = require("pdfkit");

const estudanteModel = require("../models/estudanteModel");

const exportEstudantesPDF = async (req, res) => {
  try {
    console.log("---");
    const estudantes = await estudanteModel.getEstudantes();

    console.log(estudantes);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=estudantes.pdf");

    const doc = new PDFDocument();
    doc.pipe(res);

    // Título do PDF
    doc
      .fontSize(24)
      .font("Helvetica-Bold")
      .text("Relatório de estudantes e  projetos participantes", {
        align: "center",
      });
    doc.moveDown(1);

    // Subtítulo
    doc
      .fontSize(16)
      .font("Helvetica")
      .text("Lista de Estudantes cadastrados no sistema", { align: "center" });
    doc.moveDown(1);

    // Conteúdo do PDF
    estudantes.forEach((estudante) => {
      doc.fontSize(12);
      doc.text(`ID do estudante: ${estudante.id}`);
      doc.text(`Nome: ${estudante.nome}`);
      doc.text(`Estudante email : ${estudante.email}`);
      doc.text(`Projeto: ${estudante.projeto_nome || "Sem projeto"}`);
      doc.text(`Foto: ${estudante.photo || "Sem foto"}`);
      doc.moveDown(0.5);

      // Linha divisória entre os estudant
      doc.moveTo(40, doc.y).lineTo(550, doc.y).strokeColor("#cccccc").stroke();
      doc.moveDown(1);
    });

    doc.end();
  } catch (error) {
    res.status(500).json({ message: "Erro ao gerar o PDF" });
  }
};

module.exports = { exportEstudantesPDF };
