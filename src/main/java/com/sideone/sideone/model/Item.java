package com.sideone.sideone.model;

public class Item {
    private Long id;
    private String name;
    private String artist;
    private double startingPrice;
    private double currentBid;
    private String image;

    // CONSTRUCTOR TO INITIALIZE ALL FIELDS
    public Item(Long id, String name, String artist, double startingPrice, double currentBid, String image) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.startingPrice = startingPrice;
        this.currentBid = currentBid;
        this.image = image;
    }

    // GETTERS AND SETTERS
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public double getStartingPrice() {
        return startingPrice;
    }

    public void setStartingPrice(double startingPrice) {
        this.startingPrice = startingPrice;
    }

    public double getCurrentBid() {
        return currentBid;
    }

    public void setCurrentBid(double currentBid) {
        this.currentBid = currentBid;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
