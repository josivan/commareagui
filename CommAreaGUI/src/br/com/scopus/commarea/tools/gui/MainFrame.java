package br.com.scopus.commarea.tools.gui;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileReader;

import javax.swing.BorderFactory;
import javax.swing.Box;
import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.filechooser.FileNameExtensionFilter;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class MainFrame extends JFrame implements ActionListener {
    private JButton btnNew = new JButton("Novo Projeto");
    private JButton btnOpen = new JButton("Abrir Projeto");
    private JPanel mainLayout;
    private ProjectEdition project = new ProjectEdition();
    
    MainFrame() {
        setTitle("Geração de CommArea");
        setSize(300, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
//        pack();
        this.mainLayout = mainLayout();
        this.mainLayout.add(this.project, BorderLayout.SOUTH);
        this.project.setVisible(false);
        setContentPane(mainLayout);
        setLocationRelativeTo(null);
        this.addEvents();
    }
    
    private JPanel mainLayout() {
        JPanel panel = new JPanel(new BorderLayout(5, 5));
        panel.setBorder(BorderFactory.createEmptyBorder(12, 12, 11, 11));
        JPanel pb = new JPanel();
        Box box = Box.createHorizontalBox();
        box.add(btnNew);
        box.add(Box.createHorizontalStrut(5));
        box.add(btnOpen);
        panel.add(box, BorderLayout.NORTH);
        return panel;
    }
    
    private void addEvents() {
        this.btnNew.addActionListener(this);
        this.btnOpen.addActionListener(this);
    }

    public final void actionPerformed(ActionEvent e) {
        Object source = e.getSource();
        
        if (source == this.btnNew) {
//            JDialog dialog = new DialogProject(this);
//            dialog.setVisible(true);
            this.project.resetData();
            this.project.setVisible(true);
        }
        else if (source == this.btnOpen) {
            this.openProject();
            this.project.setVisible(true);
        }
    }
    
    @SuppressWarnings("unchecked")
    private void openProject() {
        try {
            File toOpen = selectedProjectFile();
            JSONParser parser = new JSONParser();
            Object obj = parser.parse(new FileReader(toOpen));
            System.out.println(obj);
//            JDialog dialog = new DialogProject(this, JSONObject.class.cast(obj));
//            dialog.setVisible(true);
            this.project.setData(JSONObject.class.cast(obj));
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    private File selectedProjectFile() {
        JFileChooser fc = new JFileChooser(".");
        fc.setDialogTitle("Abrir Projeto Comm Area");
        fc.setFileSelectionMode(JFileChooser.FILES_ONLY);
        fc.setFileFilter(new FileNameExtensionFilter("Projeto de Comm Area", "caproject"));
        fc.setMultiSelectionEnabled(false);
        fc.showOpenDialog(this);
        return fc.getSelectedFile();
    }
}
