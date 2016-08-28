package br.com.scopus.commarea.tools.gui;

import java.awt.BorderLayout;
import java.io.FileWriter;
import java.util.HashMap;
import java.util.Map;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.JTextField;
import javax.swing.SpringLayout;

import org.json.simple.JSONObject;

import layout.SpringUtilities;

public class ProjectEdition extends EditablePanel {
    private JTextField[] texts = new JTextField[3];
    
    ProjectEdition() {
        setConteudo(conteudo());
    }
    
    public Map<String, String> getRawData() {
        Map<String, String> data = new HashMap<String, String>(3);
        data.put("name", this.texts[0].getText());
        data.put("package", this.texts[1].getText());
        data.put("location", this.texts[2].getText());
        return data;
    }

    public JSONObject getJsonObject() {
        return new JSONObject(getRawData());
    }
    
    void setData(Map<String, String> data) {
        this.texts[0].setText(data.get("name"));
        this.texts[1].setText(data.get("package"));
        this.texts[2].setText(data.get("location"));
        
        for (JTextField txt : texts) {
            txt.setEditable(false);
            //txt.setEnabled(false);
        }
    }

    @Override
    protected void onSave() {
        try {
            JSONObject obj = getJsonObject();
            System.out.println(obj);
            String fileName = obj.get("name") + ".caproject";
            
            FileWriter fw = new FileWriter(fileName);
            fw.write(obj.toJSONString());
            fw.flush();
            fw.close();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected JPanel conteudo() {
        JPanel main = new JPanel(new BorderLayout(5, 5));
        JPanel p = new JPanel(new SpringLayout());
        String[] labels = {"Nome: ", "Pacote Padrão: ", "Pasta: "};
        
        for (int i = 0; i < labels.length; i++) {
            JLabel l = new JLabel(labels[i], JLabel.TRAILING);
            p.add(l);
            JTextField textField = new JTextField(10);
            l.setLabelFor(textField);
            p.add(textField);
            this.texts[i] = textField;
        }
        
        SpringUtilities.makeGrid(p, 3, 2);
        
        p.setOpaque(true);

        main.add(p, BorderLayout.NORTH);
        main.add(fields(), BorderLayout.CENTER);
        return main;
    }
    
    void resetData() {
        for (JTextField txt : texts) {
            txt.setText("");
            txt.setEditable(true);
        }        
    }
    
    JPanel fields() {
        JPanel panel = new JPanel(new BorderLayout(5, 5));
        
        JTabbedPane tab = new JTabbedPane();
        tab.add("Request", new FieldsPanel());
        tab.add("Response", new FieldsPanel());
        
        panel.add(tab, BorderLayout.CENTER);
        
        return panel;
    }
}
