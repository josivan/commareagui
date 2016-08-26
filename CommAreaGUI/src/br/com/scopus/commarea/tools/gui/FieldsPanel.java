package br.com.scopus.commarea.tools.gui;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import org.json.simple.JSONObject;

public class FieldsPanel extends JPanel implements ActionListener, HasJsonData {
    private JTextField nome = new JTextField(10);
    private JComboBox<String> cbo = new JComboBox<String>();
    private JCheckBox chk = new JCheckBox();
    private JButton btn = new JButton("+");
    private Map<String, String> map = new HashMap<String, String>();
    
    FieldsPanel() {
        super(new FlowLayout(FlowLayout.LEFT));
        add(new JLabel("Nome:"));
        add(nome);
        add(new JLabel("Tipo:"));
        add(cbo);
        add(new JLabel("Permite Nulo:"));
        add(chk);
        add(btn);
        
        btn.addActionListener(this);
        loadProperties();
    }

    public void actionPerformed(ActionEvent e) {
        System.out.println(getJsonObject());
    }
    
    private void loadProperties() {
        try {
            Properties p = new Properties();
            p.load(new FileReader("data-type.properties"));
            
            String[] valores = p.getProperty("valores").split(",");
            
            for (String s : valores) {
                String i = p.getProperty(s.concat(".nome")); 
                cbo.addItem(i);
                map.put(i, p.getProperty(s.concat(".map")));
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Map<String, String> getRawData() {
        Map<String, String> data = new HashMap<String, String>(3);
        data.put("nome", this.nome.getText());
        data.put("tipo", this.map.get(this.cbo.getSelectedItem()));
        data.put("permiteNull", Boolean.toString(this.chk.isSelected()));
        return data;
    }

    public JSONObject getJsonObject() {
        return new JSONObject(getRawData());
    }
}
