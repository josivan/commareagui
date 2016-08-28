package br.com.scopus.commarea.tools.gui;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.Box;
import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JPanel;

public abstract class EditablePanel extends JPanel implements ActionListener, HasJsonData {
    private final JButton btnClose = new JButton("Cancelar");
    private final JButton btnSave = new JButton("Salvar");

    EditablePanel() {
        setLayout(new BorderLayout(5, 5));
        addEvents();
        add(panelButtons(), BorderLayout.SOUTH);
    }
    
    private void addEvents() {
        this.btnClose.addActionListener(this);
        this.btnSave.addActionListener(this);
    }
    
    private JComponent panelButtons() {
      Box box = Box.createHorizontalBox();
      box.add(Box.createHorizontalGlue());
      box.add(this.btnSave);
      box.add(Box.createHorizontalStrut(5));
      box.add(this.btnClose);
      return box;
    }

    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();
        
        if (source == this.btnClose) {
            this.setVisible(false);
        }
        else if (source == this.btnSave) {
            this.onSave();
        }
    }
    
    protected abstract void onSave();
    
    void setConteudo(JPanel panel) {
        add(panel, BorderLayout.NORTH);
    }
}
