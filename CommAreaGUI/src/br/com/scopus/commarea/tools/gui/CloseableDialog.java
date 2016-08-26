package br.com.scopus.commarea.tools.gui;

import java.awt.BorderLayout;
import java.awt.Component;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JPanel;

abstract class CloseableDialog extends JDialog implements ActionListener {
    private final JButton btnClose = new JButton("Cancelar");
    private final JButton btnSave = new JButton("Salvar");
    private JPanel mainPanel;
    
    CloseableDialog(JFrame parent, String title) {
        super(parent, true);
        setTitle(title);
        //TODO handle close
        this.setDefaultCloseOperation(HIDE_ON_CLOSE);
        this.addEvents();
        this.mainPanel = mainPanel();
        setContentPane(this.mainPanel);
    }
    
    private void addEvents() {
        this.btnClose.addActionListener(this);
        this.btnSave.addActionListener(this);
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
    
    private JPanel mainPanel() {
        JPanel panel = new JPanel(new BorderLayout(5, 5));
        panel.setBorder(BorderFactory.createEmptyBorder(12, 12, 11, 11));
        
        JPanel buttons = new JPanel(new GridLayout(1, 2, 5, 5));
        buttons.add(this.btnSave);
        buttons.add(this.btnClose);
        
        panel.add(buttons, BorderLayout.SOUTH);
        return panel;
    }
    
    public void setMainComponent(Component component) {
        //TODO handle to define it only once
        this.mainPanel.add(component, BorderLayout.CENTER);
    }
}
